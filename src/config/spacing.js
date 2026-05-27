/**
 * SPACING CONFIGURATION
 * Centralized control for all spacing values in the Dark Room Records Linktree
 * 
 * Usage: Import and use these values in components to maintain consistency
 * Example: className={`gap-${spacing.buttonGap.mobile}`}
 */

export const spacing = {
  // Gap between buttons
  buttonGap: {
    mobile: '4',      // 16px
    tablet: '4',      // 16px
    desktop: '5',     // 20px
    className: 'gap-4 sm:gap-4 md:gap-5'
  },

  // Margin top from description text to buttons
  textToButtons: {
    mobile: '6',      // 24px
    tablet: '8',      // 32px
    desktop: '10',    // 40px
    className: 'mt-6 sm:mt-8 md:mt-10'
  },

  // Gap between logo and title
  logoToTitle: {
    mobile: '6',      // 24px
    tablet: '8',      // 32px
    className: 'mb-6 sm:mb-8'
  },

  // Gap between title and records text
  titleToRecords: {
    mobile: '1',      // 4px
    tablet: '2',      // 8px
    className: 'mb-1 sm:mb-2'
  },

  // Gap between records and description
  recordsToDescription: {
    mobile: '4',      // 16px
    tablet: '6',      // 24px
    className: 'mt-4 sm:mt-6'
  },

  // Padding inside buttons
  buttonPadding: {
    mobile: '3',      // 12px
    tablet: '4',      // 16px
    desktop: '4',     // 16px
    className: 'p-3 sm:p-4 md:p-4'
  },

  // Gap between icon and text inside button
  iconToText: {
    mobile: '2',      // 8px
    tablet: '3',      // 12px
    className: 'gap-2 sm:gap-3'
  },

  // Container padding
  containerPadding: {
    mobile: '3',      // 12px
    tablet: '0',      // 0px
    className: 'px-3 sm:px-0'
  },

  // Footer margin top
  footerMargin: {
    mobile: '12',     // 48px
    tablet: '16',     // 64px
    desktop: '20',    // 80px
    className: 'mt-12 sm:mt-16 md:mt-20'
  }
}

/**
 * QUICK REFERENCE
 * 
 * To adjust spacing:
 * 1. Edit the values above
 * 2. Update the className string to match
 * 3. Run: npm run build
 * 4. Commit and push to GitHub
 * 
 * Tailwind spacing scale:
 * 1 = 4px
 * 2 = 8px
 * 3 = 12px
 * 4 = 16px
 * 5 = 20px
 * 6 = 24px
 * 7 = 28px
 * 8 = 32px
 * 10 = 40px
 * 12 = 48px
 * 16 = 64px
 * 20 = 80px
 */
