pipeline {
    agent any
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
        stage('Run') {
            steps {
                sh 'ng serve'
            }
        }
    }
}
