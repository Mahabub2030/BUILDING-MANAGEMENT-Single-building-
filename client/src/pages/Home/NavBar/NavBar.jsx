
const NavBar = () => {
    return (
      <div class="w-full mx-auto px-6 sm:px-6 lg:px-8 ">
        <nav class="flex items-center justify-between h-[90px] bg-[#FFFFFF] border w-full">
          <div class="flex items-center space-x-6">
            <a class="flex items-center space-x-2" href="#">
              <img
                alt="DreamsEstate logo with house and compass icon"
                class="w-8 h-8"
                height="32"
                src="https://storage.googleapis.com/a1aa/image/871e6515-842e-49d8-564c-4d20dc92b9b9.jpg"
                width="32"
              />
              <span class="font-bold text-lg text-indigo-700">
                DREAMS
                <span class="text-indigo-400">ESTATE</span>
              </span>
            </a>
            <ul class="hidden md:flex space-x-6 text-sm text-gray-600 font-medium">
              <li>
                <a class="hover:text-indigo-600" href="#">
                  Home
                </a>
              </li>
              <li class="relative group cursor-pointer">
                <button class="flex items-center space-x-1 hover:text-indigo-600">
                  <span>Listing</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul class="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-10">
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="relative group cursor-pointer">
                <button class="flex items-center space-x-1 hover:text-indigo-600">
                  <span>Agent</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul class="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-10">
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="relative group cursor-pointer">
                <button class="flex items-center space-x-1 hover:text-indigo-600">
                  <span>Agency</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul class="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-10">
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="relative group cursor-pointer">
                <button class="flex items-center space-x-1 hover:text-indigo-600">
                  <span>Pages</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul class="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-10">
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="relative group cursor-pointer">
                <button class="flex items-center space-x-1 hover:text-indigo-600">
                  <span>Blog</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul class="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-10">
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="block px-3 py-2 text-gray-700 hover:bg-indigo-50"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="hover:text-indigo-600" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center space-x-3 text-sm">
            <button
              class="hidden md:flex items-center space-x-1 text-indigo-600 hover:text-indigo-800"
              type="button"
            >
              <i class="fas fa-plus-circle"></i>
              <span>Add New Property</span>
            </button>
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 text-sm font-semibold"
              type="button"
            >
              Sign Up
            </button>
            <button
              class="border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm"
              type="button"
            >
              Sign In
            </button>
            <button
              aria-label="Search"
              class="md:hidden text-gray-600 hover:text-indigo-600"
              type="button"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;