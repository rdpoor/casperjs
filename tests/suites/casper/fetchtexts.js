/*eslint strict:0*/
casper.test.begin('fetchTexts() basic tests', 1, function(test) {
    casper.start('tests/site/index.html', function() {
        test.assertEquals(this.fetchTexts('ul li'), ['one', 'two', 'three'],
            'Casper.fetchTexts() can retrieve text contents');
    }).run(function() {
        test.done();
    });
});

casper.test.begin('fetchTexts() basic tests', 1, function(test) {
    casper.start('tests/site/index.html', function() {
        test.assertEquals(this.fetchTexts('input[name="dummy_name"]'), ['dummy_value'],
            'Casper.fetchTexts() can retrieve text contents from input elements');
    }).run(function() {
        test.done();
    });
});

casper.test.begin('fetchTexts() handles HTML entities', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<html><body>Voil&agrave;</body></html>');
        test.assertEquals(this.fetchTexts('body'), ['Voilà'],
            'Casper.fetchTexts() fetches decoded text');
    });
    casper.run(function() {
        test.done();
    });
});

casper.test.begin('fetchTexts() handles empty elements', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<html><body></body></html>');
        test.assertEquals(this.fetchTexts('body'), [''],
            'Casper.fetchTexts() fetches empty string');
    });
    casper.run(function() {
        test.done();
    });
});

casper.test.begin('fetchTexts() handles non-matching elements', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<html><body></body></html>');
        test.assertEquals(this.fetchTexts('table'), [],
            'Casper.fetchTexts() returns empty array');
    });
    casper.run(function() {
        test.done();
    });
});
