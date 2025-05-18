pipeline {
    agent any

    stages {
        stage('Pull Docker Image') {
            steps {
                sh 'docker pull wahab91/portfolio-generator1'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                    docker stop portfolio-app-3100 || true
                    docker rm portfolio-app-3100 || true
                '''
            }
        }

        stage('Run Docker Container on Port 3100') {
            steps {
                sh '''
                    docker run -d \
                      --name portfolio-app-3100 \
                      -p 3100:3000 \
                      -e MONGO_URI='your-mongo-uri' \
                      -e JWT_SECRET='portfolio320' \
                      wahab91/portfolio-generator1
                '''
            }
        }
    }
}
