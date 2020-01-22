
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('clucks').insert([
        {username: 'cluck_master', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yQvuhV-UTSyHtHJKbfOavo6AKuHFxFn_M0_9A6dqpX7q3QRQuA&s', image_url: '', content: 'Q: What happens when a hen eats gunpowder? A: She lays hand gren-eggs! #roosterjokes #greneggs'},
        {username: 'angry_rooster', avatar: 'https://pbs.twimg.com/profile_images/536977106593251329/bm8d5oRp.jpeg', image_url: 'https://assets.epicurious.com/photos/57978d0e437fcffe02f722e8/master/pass/kale-chips.jpg', content: 'Stop asking me why I crossed the road!'},
        {username: 'lil_chick', avatar: 'https://emojis.wiki/emoji-pics/mozilla/front-facing-baby-chick-mozilla.png', image_url: 'https://miro.medium.com/max/3840/1*U-R58ahr5dtAvtSLGK2wXg.png', content: ''},
        {username: 'cluck_Master', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yQvuhV-UTSyHtHJKbfOavo6AKuHFxFn_M0_9A6dqpX7q3QRQuA&s', image_url: '', content: 'Q: Why did McDonalds run out of chicken? A: A farmer counted his chickens before they hatched! #roosterjokes'},
        {username: 'not_a_chicken', avatar: 'https://images.emojiterra.com/google/android-10/512px/1f422.png', image_url: 'https://i.ibb.co/zG5twCk/turtle.jpg', content: 'Cluck Cluck Cluck!'},
        {username: 'fried_chicken', avatar: 'https://cdn2.iconfinder.com/data/icons/junk-food-emoji-set/100/FRIES_5-512.png', image_url: '', content: 'Eat more #kale :D'},
        {username: 'cluck_master', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yQvuhV-UTSyHtHJKbfOavo6AKuHFxFn_M0_9A6dqpX7q3QRQuA&s', image_url: '', content: 'Send me your best #roosterjokes!!!'},
        {username: 'chicken_poop', avatar: 'http://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036', image_url: 'http://3.bp.blogspot.com/-2MPT_24JJkw/VhQmebgj0ZI/AAAAAAAAYrI/3JHVP_Ft5iI/s1600/chicken-run1.jpg', content: ''}
      ]);
    });
};