const { env } = require('process');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images : {
      domains : ['links.papareact.com']
  },
  env : {
      mapbox_key : ['pk.eyJ1Ijoic3R1d2FydGJyYWluIiwiYSI6ImNsMm14a3ozZDBuOWEzbG54MTV5aTJlc2IifQ.aly83o-POTHXRv6kPwM5Sg']
  }
}
