import User from "../models/User";

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/test');

  const user = new User({
    name: 'Bill',
    email: 'bill@initech.com',
  });
  await user.save();

  console.log(user.email); // 'bill@initech.com'
}
