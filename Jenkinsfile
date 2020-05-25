pipeline {
	environment {
    app = ''
  }
  agent any
    
  tools {nodejs "LocalNPM"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/thyanmol/Personal_Youtube_App'
      }
    }

     stage('install dependencies') {
        /* This builds the actual image */

	    script{
        sh "npm install"
    }
    }

     stage('test image') {
        /* This builds the actual image */

	    script{
        sh "npm test"
    }
    }
     
    stage('Build image') {
        /* This builds the actual image */

	    script{
        app = docker.build("thyanmol/youtube-1.0")
    }
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
		
		You would need to first register with DockerHub before you can push images to your account
		
		*/
	    script{
        docker.withRegistry('https://registry.hub.docker.com', 'thyanmol-docker') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
	    }
                echo "Trying to Push Docker Build to DockerHub"
    }  
    
  }
}
