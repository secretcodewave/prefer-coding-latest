import Link from "next/link";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Prefer Coding Secret
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Empowering individuals with cutting-edge tech skills and professional development opportunities.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Courses', 'Success Stories', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              {['Web Development', 'Digital Marketing', 'HR Management', 'View All Courses'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <address className="text-sm text-gray-600 dark:text-gray-400 not-italic space-y-2">
              <p>16/592, Old, Makronia Rd</p>
              <p>near ravidas mangal bhavan</p>
              <p>Sagar, Madhya Pradesh 470004</p>
              <p>+91 62638 73264</p>
              <p>info@prefercodingsecret.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Prefer Coding Secret. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link key={item} href="#" className="hover:text-gray-900 dark:hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
