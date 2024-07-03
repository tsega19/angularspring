pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-angular-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/tsega19/angularspring.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    def container = docker.run("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}", "-p 85:80")
                }
            }
        }
    }

    post {
        always {
            script {
                def containers = sh(script: "docker ps -q --filter 'ancestor=${env.DOCKER_IMAGE}:${env.DOCKER_TAG}'", returnStdout: true).trim()
                if (containers) {
                    sh "docker rm -f ${containers}"
                }
            }
        }
    }
}
