const Post = require("./models/post.model");

const loadTestData = async () => {
  const data = [
    {
      id: "21sd42sdsaaf",
      title: "How do I get funding for my startup?",
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      author: "Kszꓘ"
    },
    {
      id: "543fg43gzsd4",
      title: "10 Brilliant Small Bussiness Ideas",
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! From aerospace to agribusiness and financial services to startups, we help businesses grow. Operating a business can be challenging, but Oklahoma has removed the barriers and streamlined the process to make it easier for companies to develop and grow. With living costs as much as 40% lower than the national average and world-class workforce development programs, we’re making it easier to plug into the Oklahoma business ecosystem to gain access to the people, programs, and tools that will support real-time business decisions.",

      author: "Kszꓘ"
    }
  ];

  try {
    let counter = await Post.countDocuments();
    if (counter === 0) {
      console.log("No posts. Loading data...");
      await Post.create(data);
      console.log("Test data has been successfully loaded");
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
