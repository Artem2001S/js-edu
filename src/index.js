/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  console.log('config', config)
  console.log('knows ', knowsProgramming)
  console.log('focus ', focus)
  //----------------------without programming skills-----------------------
  if (!knowsProgramming) {
    //focus on family
    if (focus === 'family' && config['top_peformance'] === undefined) {
      return config.family * 325;
    }
    if (focus === 'family') {
      return config.family * 81.25;
    }

    //focus on friends
    if (focus === 'friends' && config['top_peformance'] === undefined) {
      return config.friends * 81.25;
    }
    if (focus === 'friends') {
      return config.friends * 13;
    }

    //focus on normal life
    if (focus === 'normal_life' && config['top_peformance'] === undefined) {
      return config.normal_life * 20.375;
    } 
    if (focus === 'normal_life') {
      return config.normal_life * 3.25;
    }

    //focus on profession
    if (focus === 'profession' && config['top_peformance'] === undefined) {
      return config.profession * 3.25;
    }
    if (focus === 'profession') {
      return Math.round(config.profession * 1.46666666667);
    }

    //focus on carrier
    if (focus === 'carrier' && config['top_peformance'] === undefined) {
      return Math.round(config.carrier * 1.46666666667);
    }
    if (focus === 'carrier') {
      return Math.round(config.carrier / 1.2);
    }
  }


  //focus on family
  if (focus === 'family' && config['top_peformance'] === undefined) {
    return config.family * 200;
  }
  if (focus === 'family') {
    return config.family * 50;
  }

  //focus on firends
  if (focus === 'friends' && config['top_peformance'] === undefined) {
    return config.friends * 50;
  }

  if (focus === 'friends') {
    return config.friends * 8;
  }

  //focus on normal_life
  if (focus === 'normal_life' && config['family'] === undefined) {
    return Math.floor(config.normal_life / 1.11111);
  }
  if (focus === 'normal_life' && config['top_peformance'] === undefined) {
    return config.normal_life * 12.5;
  }
  if (focus === 'normal_life') {
    return config.normal_life * 2;
  }

  //focus on profession
  if (focus === 'profession' && config['family'] === undefined) {
    return Math.floor(config.profession / 2);
  }
  if (focus === 'profession' && config['top_peformance'] === undefined) {
    return Math.floor(config.profession * 2);
  }
  if (focus === 'profession') {
    return Math.floor(config.profession / 1.11111);
  }

  //focus on carrier
  if (focus === 'carrier' && config['family'] === undefined) {
    return Math.round(config.carrier / 3.66666666667);
  }
  if (focus === 'carrier' && config['top_peformance'] === undefined) {
    return Math.floor(config.carrier / 1.11111);
  }
  if (focus === 'carrier') {
    return config.carrier * 0.5;
  }

  //top performance focus
  if (focus === 'top_peformance' && config['family'] === undefined) {
    return Math.floor(config.top_peformance / 5.83333333333);
  }
  if (focus === 'top_peformance') {
    return Math.floor(config.top_peformance / 4.28571428571);
  }


  return 0;
};
