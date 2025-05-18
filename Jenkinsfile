pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "ci_project"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/<your-username>/<your-repo>.git'
            }
        }

        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose -p $COMPOSE_PROJECT_NAME -f docker-compose.yml up -d --build'
                }
            }
        }
    }
}
