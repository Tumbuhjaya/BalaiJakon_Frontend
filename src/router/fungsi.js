

class fungsi {
    static getQueryVariable (req) {
    var query = location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == req) {
         return (pair[1]);
      }
    }
    return false;
  }
}
module.exports = fungsi