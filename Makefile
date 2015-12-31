build: dist/index.js

dist/index.js: *.ts
	./node_modules/.bin/tsc

watch:
	fswatch -o *.ts | xargs -n1 -I{} make

test:
	DEBUG=ctg:* npm test

clean:
	rm -rf dist/*

.PHONY: build watch clean test
