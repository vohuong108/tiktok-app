const { createClient } = require("@astrajs/collections");
const collection = 'posts';

exports.handle = async function (event, context, callbacks) {
    // create an Astra client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });

    console.log(astraClient);

    const post = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection);
}