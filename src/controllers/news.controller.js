import newModel from '../models/new.model.js';

async function getNews(request, response) {
    const page = request.query.page;
  
    const news = await newModel.find({});
  
    return response.send({ news });
}

async function createNew(request, response) {
  try {
    const body = request.body;
    const currentDate = new Date();
    const noticia = await newModel.create({
      title: body.title,
      imageUrl: body.imageUrl,
      body: body.body,
      date: currentDate,
    });

    return response.send({ noticia });
  } catch (error) {
    response.status(500).send({ error });
  }
}

async function deleteNew(request, response) {
    const newId = request.params.newId;
  
    await userModel.deleteOne({ _id: newId });
  
    return response.send({ success: true });
  }

export { createNew , getNews , deleteNew};