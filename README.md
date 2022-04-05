# Seetweet

<img src="/img/tweets_interface.png">

A simple tool to view retrivied data from twitter's API in a simple UI. Not only in a json file format, but in a GUI style. Configure your keys, and you are done 🚀.

## Getting Starting
To quick start you need first clone the repository:
```shell
git clone https://github.com/fernando-gap/Seetweet.git
```

Then, run these commands below:
```shell
cd Seetweet
npm install
npm config
```

Finally, you can configure your keys by typing:
```shell
touch .env && echo "
CONSUMER_KEY=<key>
CONSUMER_SECRET=<key>
ACCESS_KEY=<key>
ACCESS_TOKEN_SECRET=<key>
" >> .env
```

Make sure to change `<key>` for your actual twitter api keys.

### Start Seetweet
To start the project run:
```shell
npm start
```

You will see a link for `http://localhost:8080` and you will view the content as follows.

<img src="/img/form_interface.png">

Search for any term you would like. If you found a set of interesting tweets those are stored at `tweets` project root folder, in any case.
