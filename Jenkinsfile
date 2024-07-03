pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name' // Define your Docker image name here
    }

    tools {
        nodejs "NodeJS 18.17.1"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tsega19/angularspring.git'
            }
        }

        stage('Install node modules') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container
                    sh """
                        docker stop angular-app || true
                        docker rm angular-app || true
                    """

                    // Run the new container
                    sh """
                        docker run -d -p 80:80 --name angular-app ${DOCKER_IMAGE}:${env.BUILD_ID}
                    """
                }
            }
        }
    }
}
