# responsive-landing-pages-reactMaster-Design
 This shows how to implement reactjs in creating landing pages
 
     #How To Set your local development and clone this project to run it ?
     
      The node_modules directory is not a part of a cloned repository and should be downloaded using the npm install
      
      command to download all the direct and transitive dependencies mentioned in the package.json file:
      
      # make sure that you are in the root directory of the project, use" pwd" or "cd" for windows
         cd RepoName
         npm install
          
         It will take some time to download all the dependencies into a node_modules directory, and after the download completion, run the project:
         
         run this command:
             npm start       
               #This starts your local development server
               
               Tips
           # A node_modules directory can take up more than 200MB, so it should not be a part of a repository.
           #If node_modules is already a part of a repository then it can be removed using git rm -r --cached node_modules command, 
           # though make sure to commit and push the changes to the remote server first.
