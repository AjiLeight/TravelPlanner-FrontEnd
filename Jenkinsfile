pipeline{
    agent any
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    environment{

        registry = "amrameen769/travel_planner_frontend"
        registryCredential = 'dockerhub'
    }

    stages{
       stage('Building image') {
          steps{
            script {
              dockerImage = docker.build registry + ":dev"
            }
          }
       }
       stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                 }
             }
        }

    }
}