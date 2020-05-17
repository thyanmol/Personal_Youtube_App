pipeline {
  agent any
    
  tools {nodejs "LocalNPM"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/thyanmol/Personal_Youtube_App'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
	sh 'npm run build'
      }
    }  
    
  }
}
