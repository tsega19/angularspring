node {
    stage('Checkout'){
        git branch: 'main', url:'https://github.com/tsega19/angularspring.git'
    }
    stage('Install node modules'){
        sh"npm install"
    }
    stage('build'){
        sh"npm run build"
    }
    stage('deploy'){
        sh"pm2 restart all"
    }
} 
