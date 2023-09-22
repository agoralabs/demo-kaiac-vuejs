#!/bin/bash

THE_DATE=$(date '+%Y-%m-%d %H:%M:%S')
log_msg "Build started on $THE_DATE"

source_folder=$TF_VAR_ENV_APP_FE_LOCAL_SOURCE_FOLDER

mkdir -p $source_folder/tmp
chmod 777 $source_folder/tmp

arraytpl=($(ls -d $source_folder/devops/*.template))

log_msg "generate files..."
for template in "${arraytpl[@]}"
do
    pattern=${template%.template}
    generated=${pattern##*/}
    log_msg "generate $generated file..."
    pattern=${template%.template}
    appenvsubstr $template $source_folder/$generated
done

#For vuejs only
log_msg "generate ./.env file..."
env_file=$source_folder/devops/.env.template
appenvsubstr $env_file $source_folder/.env



authenticate_to_ecr $TF_VAR_ENV_APP_GL_AWS_ACCOUNT_ID $TF_VAR_ENV_APP_GL_AWS_REGION_ECR

log_msg "Building the Docker image..."
docker build -t $TF_VAR_ENV_APP_GL_NAME:$TF_VAR_ENV_APP_FE_NAMESPACE'_'$TF_VAR_ENV_APP_GL_STAGE $source_folder

log_msg "Run services for the $TF_VAR_ENV_APP_GL_NAME environment..."
docker compose -f $source_folder/docker-compose.yml up -d
