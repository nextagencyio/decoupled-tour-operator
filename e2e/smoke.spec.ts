import { test, expect } from '@playwright/test'

test.describe('Tour Operator - Smoke Tests', () => {
  test('homepage loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
    // The hero title from Drupal should appear
    await expect(page.locator('text=Adventures Led by Experts')).toBeVisible()
  })

  test('homepage shows stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from Drupal paragraphs
    await expect(page.locator('text=85+')).toBeVisible()
    await expect(page.locator('text=Unique Tours')).toBeVisible()
  })

  test('tours listing page loads with content', async ({ page }) => {
    await page.goto('/tours')
    await expect(page.locator('h1')).toContainText('Tours')
    // Should have at least one tour card
    await expect(page.locator('text=Serengeti Wildlife Safari')).toBeVisible()
  })

  test('tour detail page loads', async ({ page }) => {
    await page.goto('/tours/serengeti-safari')
    await expect(page.locator('h1')).toContainText('Serengeti Wildlife Safari')
    await expect(page.locator('text=7 Days')).toBeVisible()
    await expect(page.locator('text=$4,500')).toBeVisible()
  })

  test('guides listing page loads with content', async ({ page }) => {
    await page.goto('/guides')
    await expect(page.locator('h1')).toContainText('Guides')
    await expect(page.locator('text=Amani Kwame')).toBeVisible()
  })

  test('guide detail page loads', async ({ page }) => {
    await page.goto('/guides/amani-kwame')
    await expect(page.locator('h1')).toContainText('Amani Kwame')
  })

  test('destinations listing page loads with content', async ({ page }) => {
    await page.goto('/destinations')
    await expect(page.locator('h1')).toContainText('Destinations')
    await expect(page.locator('h3').filter({ hasText: 'Tanzania' })).toBeVisible()
  })

  test('destination detail page loads', async ({ page }) => {
    await page.goto('/destinations/tanzania')
    await expect(page.locator('h1')).toContainText('Tanzania')
  })

  test('reviews listing page loads with content', async ({ page }) => {
    await page.goto('/reviews')
    await expect(page.locator('h1')).toContainText('Reviews')
    await expect(page.locator('text=Best Safari Experience')).toBeVisible()
  })

  test('review detail page loads', async ({ page }) => {
    await page.goto('/reviews/david-serengeti-review')
    await expect(page.locator('h1')).toContainText('Best Safari Experience')
  })

  test('about page loads via catch-all route', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('navigation header is present on all pages', async ({ page }) => {
    await page.goto('/tours')
    await expect(page.locator('header')).toBeVisible()
    // Check nav links exist
    await expect(page.locator('a[href="/tours"]')).toBeVisible()
  })
})
