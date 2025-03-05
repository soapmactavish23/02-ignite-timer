pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        TOMCAT_WEBAPPS = '/usr/local/tomcat/webapps'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'prod', 
                    url: 'https://github.com/soapmactavish23/02-ignite-timer',
                    credentialsId: 'GitHub-PAT'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                    rm -rf $TOMCAT_WEBAPPS/pomodoro
                    mkdir -p $TOMCAT_WEBAPPS/pomodoro
                    cp -r dist/* $TOMCAT_WEBAPPS/pomodoro/
                '''
            }
        }
    }
}
