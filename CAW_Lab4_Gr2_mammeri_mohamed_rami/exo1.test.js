function exf(s, n) {
  for (let i = 0; i < n; i++) {
    console.log(s);
  }
}

exf("echo", 5);



test('should log "echo" 5 times', () => {
  exf('echo', 5); 
});

test('should log "JS from server" 10 times', () => {
  exf('JS from server', 10); 
});