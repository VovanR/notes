# JS TDD

----

- See: https://bespoyasov.ru/ttt-tdd

## Prevent default

```javascript
it('should preventDefault', function () {
    var m = module();
    var e = sinon.spy($.Event.prototype, 'preventDefault');
    var $previews = $('#fixtures').find('.js-item');
    $($previews[3]).trigger('click');
    assert.isTrue(e.calledOnce);
    e.restore();
});
```


## Ajax

```javascript
/* jscs: disable */
var ajaxResponse = JSON.parse('[{"count": 0]');
/* jscs: enable */
```

```javascript
describe('_sendRequest', function () {
    afterEach(function () {
        $.ajax.restore();
    });

    it('should send correct data', function () {
        sinon.spy($, 'ajax');

        var m = module();
        m._sendRequest();
        assert.isTrue($.ajax.calledOnce);
        assert.equal($.ajax.getCall(0).args[0].url, '/foo/');
        assert.deepEqual($.ajax.getCall(0).args[0].data, {
            count: 5,
        });
    });

    it('should add `_state_waiting` class before send', function () {
        var m = module();
        m._sendRequest();
        assert.isTrue(m._$block.hasClass('_state_waiting'));
        sinon.stub($, 'ajax').yieldsTo('success', []);
    });

    it('should remove `_state_waiting` class after send', function () {
        var m = module();
        sinon.stub($, 'ajax').yieldsTo('success', []);
        m._sendRequest();
        assert.isFalse(m._$block.hasClass('_state_waiting'));
    });
});
```


## Is called

```javascript
it('should fire `_bindScrollbar`', function () {
    var m = module();
    sinon.spy(m, '_bindScrollbar');
    m._bindControls();
    assert.isTrue(m._bindScrollbar.calledOnce);
});
```


## Event

- See: https://github.com/react-bootstrap/react-bootstrap/pull/1579/files
