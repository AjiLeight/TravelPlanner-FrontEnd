pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t amrameen769/travel_planner_frontend:dev .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKER-HUB_CREDENTIALS_PSW | docker login -u $DOCKER-HUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push amrameen769/travel_planner_frontend:dev'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}