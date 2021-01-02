const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')
          
try {
  const enterprise = core.getInput('enterprise')
  const outputFilename = core.getInput('outputFilename')
  const token = core.getInput('token')
  console.log(`Retrieving repositories for ${enterprise}!`)
  
  const query = `query($enterpriseName:String!, $cursor:String) {
    enterprise(slug: $enterpriseName) {
      name
      organizations(first: 100, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
        nodes {
          name 
          login
        }
      }
    }
  }`;
  const variables = {
    enterpriseName: enterprise
  }
  
  let hasNextPage = true
  let orgs = []

  while (hasNextPage) {
    const result = await github.graphql(query, variables)
    orgs = orgs.concat(result.enterprise.organizations.nodes)
    hasNextPage = result.enterprise.organizations.pageInfo.hasNextPage
    variables.cursor = result.enterprise.organizations.pageInfo.endCursor
  }

  core.setOutput('repo-list', orgs)
  if(outputFilename) {
    fs.writeFileSync(outputFilename, JSON.stringify(orgs))
  }
} catch (error) {
  core.setFailed(error.message);
}