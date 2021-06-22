require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "21ddf60c82a859d6b2531c1ccc37027ccae9c0fb301b5d8447486e7e1f0a9e2als"

module.exports = {
  solidity: "0.7.3",
  networks: {
  	ropsten: {
  		url: `https://ropsten.infura.io/v3/3e05b8282baa4d41b3c6aeb3d830e3c9`,
  		accounts: [`0x${Private_Key}`]
  	}
  }
};