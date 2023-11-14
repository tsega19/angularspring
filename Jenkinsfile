pipeline {
    agent {
        node {
            label 'node18.17.1'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/tsega19/angularspring.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                // Add deployment steps here
            }
        }
    }
}
