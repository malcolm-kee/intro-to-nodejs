const hasFaultyWords = (text) => text.toLowerCase().includes('shit');

exports.blockFaultyWords = function blockFaultyWords(req, res, next) {
  if (req.body && hasFaultyWords(JSON.stringify(req.body))) {
    return res.status(400).json({
      message: 'No faulty language please.',
    });
  }

  next();
};
