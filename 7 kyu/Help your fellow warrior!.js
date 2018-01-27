function getHonorPath(honorScore, targetHonorScore) {
  if(honorScore >= targetHonorScore) {
      return {'1kyus': undefined, '2kyus': undefined};
  }
  if((targetHonorScore - honorScore)%2 == 0) {
      return {'1kyus': (targetHonorScore - honorScore)/2, '2kyus': 0};
  }
  return {'1kyus': (targetHonorScore - honorScore - 1)/2, '2kyus': 1};
}
