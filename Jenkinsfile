pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Fix dependencies') {
            steps {
                sh 'npm audit fix'
            }
        }
        stage('Build application') {
            steps {
                sh 'npm run build'
            }
        }
    }
}

