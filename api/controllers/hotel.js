import Hotel from "../models/hotel.js";

export const cretehotel = async (req, res) => {
  const newhotel = new Hotel(req.body);
  try {
    const savehotel = await newhotel.save();

    res.status(200).json(savehotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatehotel = async (req, res) => {
  const updatedhotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  try {
    res.status(200).json(updatedhotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getallhotel = async (req, res, next) => {
  const hotel = await Hotel.find();
  try {
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
    // next(err);
  }
};

export const gethotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  try {
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const countBycity = async (req, res) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const countBytype = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  try {
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletehotel = async (req, res) => {
  const deletehotel = await Hotel.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json({ massage: " success " });
  } catch (err) {
    res.status(500).json(err);
  }
};
