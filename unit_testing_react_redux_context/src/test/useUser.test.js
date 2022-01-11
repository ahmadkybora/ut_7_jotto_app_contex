import { renderHook } from '@testing-library/react-hooks'
import useUser from '../components/useUser'

// بوسیله این لایبرری میتوان به راحتی به استیت
// مورد نظر دسترسی داشت
// البته باید طبق قوانین این لایبرری عمل کرد
test('', () => {
  const { result } = renderHook(() => useUser())

  expect(result.current.count).toBe(0)
  expect(typeof result.current.increment).toBe('function')
})