const pkg = require('cleandi');
const {builder, asyncBuilder} = pkg;

const provider = builder()
    .bindValue('msg', 'hello world!')
    .build('msg');

const asyncProvider = asyncBuilder()
    .bindValue('msg', 'hello world!')
    .build('msg');

const providerWorks = provider.msg === 'hello world!';

asyncProvider.msg.then(msg => {
    const asyncProviderWorks = msg === 'hello world!'

    if (providerWorks && asyncProviderWorks)
        process.exit(0)
    else
        process.exit(1)
});

