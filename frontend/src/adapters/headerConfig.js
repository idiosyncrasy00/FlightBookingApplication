function headerConfig(tokenValue) {
  console.log("tokenValue: ", tokenValue);
  return {
    withCredentials: true,
    headers: {
      "Authorization": "Bearer " + tokenValue,
      'Content-Type': 'application/json'
    }
  }
}

export default headerConfig;