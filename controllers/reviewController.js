const Review = require("./../models/reviewModel");
const factory = require("./handlerFactory");
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Set tour and user IDs for nested routes if not provided
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user ? req.user.id : undefined;
  next();
};

// Optionally, you can add population for user and tour in getOne/getAll
exports.getAllReviews = factory.getAll(Review, {
  path: "user",
  select: "name photo",
});
exports.getReview = factory.getOne(Review, {
  path: "user",
  select: "name photo",
});
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
