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
