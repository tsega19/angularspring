pipeline {
    agent any
    tools {
        nodejs tool: 'NodeJS 18.17.1'
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
        stage('Deploy') {
            steps {
                sh 'pm2 restart all'
            }
        }
    }
    post {
        always {
            // Clean up or additional actions that should always run
            echo 'Pipeline execution completed'
        }
        success {
            // Actions to perform on successful build
            echo 'Pipeline succeeded!'
        }
        failure {
            // Actions to perform on build failure, e.g., notifications
            mail to: 'your@email.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.BUILD_URL}"
        }
    }
}
