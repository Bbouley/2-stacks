var expect = chai.expect;
// var should = chai.should();

// sample!
var testStack = new Stack();

var testQueue = new Queue();

describe('Queue and Stack', function() {

  it('should add item to first stack in the order they are added', function() {
    testStack.addItem('a');
    expect(testStack.items[0]).to.equal('a');
    testStack.addItem('b');
    // expect(testStack.items).to.deep.equal(['a', 'b']);
    var popped = testStack.removeItem();
    expect(popped).to.equal('b');
    expect(testStack.items).to.deep.equal(['a']);
  });

  it('should add item to first stack in queue', function(){
    testQueue.enqueue('a');
    // expect(testQueue.stack1.items).to.deep.equal(['a']);
    testQueue.enqueue('b');
    // expect(testQueue.stack1.items).to.deep.equal(['a', 'b']);
    expect(testQueue.dequeue()).to.equal('a');
    expect(testQueue.dequeue()).to.equal('b');
    expect(testQueue.stack2.items).to.deep.equal([]);
  });

  it('should add items to first queue when second queue has items in it', function(){
    testQueue.enqueue('a');
    testQueue.enqueue('b');
    testQueue.dequeue();
    expect(testQueue.stack2.items).to.deep.equal(['b']);
    testQueue.enqueue('c');
    expect(testQueue.stack1.items).to.deep.equal(['c']);
    expect(testQueue.dequeue()).to.equal('b');
    expect(testQueue.dequeue()).to.equal('c');
  });

});
