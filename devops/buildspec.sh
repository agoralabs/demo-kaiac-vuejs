#!/bin/bash

THE_DATE=$(date '+%Y-%m-%d %H:%M:%S')
echo "Build started on $THE_DATE"

appenvsubstr(){
    p_template=$1
    p_destination=$2
    envsubst '$TF_VAR_ENV_APP_FE_S3_BUCKET_NAME' < $p_template \
    | envsubst '$TF_VAR_ENV_APP_FE_DISTRIBUTION_ID' \
    | envsubst '$TF_VAR_ENV_APP_BE_URL' > $p_destination
}

appenvsubstr devops/.env.template .env
