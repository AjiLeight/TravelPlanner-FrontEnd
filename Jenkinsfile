pipeline{
    agent {
            docker { image 'node:18.17.1-alpine3.18' }
    }
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    environment{

        registry = "amrameen769/travel_planner_frontend"
        registryCredential = 'docker-hub'
    }

    stages{
       stage('Building image') {
          steps{
            script {
              dockerImage = docker.build registry + ":$BUILD_NUMBER"
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