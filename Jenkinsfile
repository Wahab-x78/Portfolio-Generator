pipeline {
         agent any
         environment {
             DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
         }
         stages {
             stage('Checkout') {
                 steps {
                     git url: 'https://github.com/Wahab-x78/Portfolio-Generator.git', branch: 'main'
                 }
             }
             stage('Build Docker Image') {
                 steps {
                     script {
                         sh 'docker build -t wahab91/portfolio-generator:latest .'
                     }
                 }
             }
             stage('Push to Docker Hub') {
                 steps {
                     script {
                         sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                         sh 'docker push wahab91/portfolio-generator:latest'
                     }
                 }
             }
             stage('Deploy with Docker Compose') {
                 steps {
                     script {
                         sh 'docker-compose -p portfolio_ci -f docker-compose.yml up -d --build'
                     }
                 }
             }
         }
         post {
             always {
                 sh 'docker logout'
             }
         }
     }