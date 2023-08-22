pipeline {
 agent any
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build') {
          steps  {
            echo "Building.."
            sh '''
            cd hello-world-BE
            npm install
            cd ../hello-world-FE
            npm install
            '''
         }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                '''
            }
        }
    }
}
