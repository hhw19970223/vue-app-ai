export const enum MENU {
  /** 首  页 */
  home = 'home',
}

export const menuList = [
  {
      name: "首      页",
      path: MENU.home,
  },
];

/**
 * 时间对应毫秒
 */
export const enum TIME {
  /** 1秒 */
  second = 1000,
  /** 10秒 */
  second_ten = 10 * 1000,
  /** 30秒 */
  second_thirty = 30 * 1000,
  /** 1分钟 */
  minute = 60 * 1000,
  /** 5分钟 */
  minute_five = 60 * 1000 * 5,
  /** 10分钟 */
  minute_ten = 60 * 1000 * 10,
  /** 20分钟 */
  minute_twenty = 60 * 1000 * 20,
  /** 30分钟 */
  minute_thirty = 60 * 1000 * 30,
  /** 1小时 */
  hour = 60 * 60 * 1000,
  /** 2小时 */
  hour_two = 60 * 60 * 1000 * 2,
  /** 1天 */
  day = 24 * 60 * 60 * 1000,
  /** 1周 */
  week = 24 * 60 * 60 * 1000 * 7,
  //八天
  day_eight = 24 * 60 * 60 * 1000 * 8,
  /** 一年 */
  year =  24 * 60 * 60 * 1000 * 365,
}