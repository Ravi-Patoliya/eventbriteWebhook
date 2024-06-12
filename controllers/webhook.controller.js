module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  res.status(200).send(`Hello, ${name}!`);
};

// module.exports = {
//     webhook: async (req, res) => {
//         return res.send('Webhook Run Successfully');
//     },
//     get: async (req, res) => {
//         let { search } = req.query;

//         const data = {
//             isEmail: false,
//             isDomain: false,
//             avatar: null,
//             companyName: null,

//         };

//         search = search ? search.replace(/ /g,'').toLowerCase() : search;
//         console.log(`DEBUG: :-------------: search :-------------:`, search);

//         if (REGEXP.EMAIL.test(search)) {
//             data.isEmail = true;
//             data.avatar = getGravatar({ email: search, size: 100 });
//         } else if (REGEXP.DOMAIN.test(search)) {
//             data.isDomain = true;
//             data.avatar = getCompanyLogo({ domain: search });
//             data.companyName = await getCompany({ domain: search });
//         }
//         data.query = search;
//         console.log(`DEBUG: :-------------: data :-------------:`, data);
//         return res.render('avatars', {
//             pageTitle: 'Avatars',
//             profile: data,

//         });
//     },
// };
