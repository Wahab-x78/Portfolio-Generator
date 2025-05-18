pipeline {
    agent any

    stages {
        stage('Stop Old Jenkins Container') {
            steps {
                sh '''
                docker stop jenkins-portfolio-app || true
                docker rm jenkins-portfolio-app || true
                '''
            }
        }

        stage('Run New Jenkins Container') {
            steps {
                sh '''
                docker run -d \
                --name jenkins-portfolio-app \
                -p 3100:3000 \
                -e MONGO_URI=mongodb+srv://wowcoupleteam:Wow_3000@cluster0.tonck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 \
                -e JWT_SECRET=portfolio320 \
                wahab91/portfolio-generator1
                '''
            }
        }
    }
}
