exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'pookypoopky',
      age: 85,
      email: 'pooky1997@naver.com'
    })
  }
}