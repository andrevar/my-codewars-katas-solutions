// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = []
    var col = this.collection.slice()
    while(col.length > 0){
        let temp = []
        for(let i = 0; i < this.itemsPerPage; i++) {
           let x = col.shift();
           if(x) {
           temp.push(x);
           }
        }
        this.pages.push(temp);
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex > this.pages.length - 1) {
        return -1;
    }
    return  this.pages[pageIndex].length;
    
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    var num = Math.floor(itemIndex / this.itemsPerPage);
    if (num < 0 || itemIndex > this.collection.length || this.collection.length == 0) {
        return -1; 
    }
    return num;
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageItemCount(2))
