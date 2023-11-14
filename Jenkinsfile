pipeline {
    agent {
        node {
            label 'node-18.17.1'
        }
    }

    environment {
        PATH = "/path/to/node-18.17.1/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/tsega19/angularspring.git']]])
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    dir('angularspring') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    dir('angularspring') {
                        sh 'npm run build -- --prod'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    dir('angularspring') {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here if needed
            }
        }
    }
}
